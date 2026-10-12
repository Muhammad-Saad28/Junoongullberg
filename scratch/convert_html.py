import os
from bs4 import BeautifulSoup
import re

def camel_case(s):
    parts = s.split('-')
    return parts[0] + ''.join(x.title() for x in parts[1:])

def style_to_dict(style_str):
    if not style_str: return "{}"
    styles = []
    for rule in style_str.split(';'):
        if ':' in rule:
            key, val = rule.split(':', 1)
            key = key.strip()
            val = val.strip()
            styles.append(f'"{camel_case(key)}": "{val}"')
    return "{ " + ", ".join(styles) + " }"

def process_html_to_jsx(html_content, component_name):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    for script in soup.find_all('script'):
        script.decompose()

    main = soup.find('main')
    if not main:
        main = soup.body
        if not main:
            main = soup

    html_str = str(main)
    
    html_str = re.sub(r'\bclass\s*=', 'className=', html_str)
    html_str = re.sub(r'\bfor\s*=', 'htmlFor=', html_str)
    
    html_str = re.sub(r'\bonclick\s*=\s*"[^"]*"', '', html_str)
    html_str = re.sub(r"\bonclick\s*=\s*'[^']*'", '', html_str)
    html_str = re.sub(r'\bonsubmit\s*=\s*"[^"]*"', '', html_str)
    
    html_str = re.sub(r'\brequired=""', 'required', html_str)
    html_str = re.sub(r'\bchecked=""', 'defaultChecked', html_str)
    html_str = re.sub(r'\bdisabled=""', 'disabled', html_str)
    html_str = re.sub(r'\bautofocus=""', 'autoFocus', html_str)
    html_str = re.sub(r'\breadonly=""', 'readOnly', html_str)
    html_str = re.sub(r'\bselected=""', '', html_str)  # Remove selected
    
    html_str = re.sub(r'\bmaxlength="(\d+)"', r'maxLength={\1}', html_str)
    html_str = re.sub(r'\brows="(\d+)"', r'rows={\1}', html_str)
    html_str = re.sub(r'\btabindex="(\d+)"', r'tabIndex={\1}', html_str)
    
    def style_replacer(match):
        style_content = match.group(1)
        return 'style={' + style_to_dict(style_content) + '}'
        
    html_str = re.sub(r'style="([^"]*)"', style_replacer, html_str)
    html_str = re.sub(r"style='([^']*)'", style_replacer, html_str)

    html_str = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html_str, flags=re.DOTALL)
    
    html_str = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html_str)
    html_str = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html_str)
    html_str = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html_str)
    html_str = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html_str)
    
    html_str = html_str.replace('xmlns:xlink', 'xmlnsXlink')
    html_str = html_str.replace('xlink:href', 'xlinkHref')
    html_str = html_str.replace('stroke-width', 'strokeWidth')
    html_str = html_str.replace('stroke-linecap', 'strokeLinecap')
    html_str = html_str.replace('stroke-linejoin', 'strokeLinejoin')
    html_str = html_str.replace('viewbox', 'viewBox')
    html_str = html_str.replace('attributename', 'attributeName')
    html_str = html_str.replace('repeatcount', 'repeatCount')
    
    jsx = f"""import Link from 'next/link';

export default function {component_name}() {{
  return (
    <>
      {html_str}
    </>
  );
}}
"""
    return jsx

input_dir = "../stitch_junoon_luxury_restaurant_experience"
output_dir = "../junoon/app"

mappings = {
    "junoon_fine_pakistani_gastronomy_gulberg_lahore": "page.tsx",
    "contact_location_junoon_pakistani_gastronomy": "contact/page.tsx",
    "gallery_junoon_pakistani_gastronomy": "gallery/page.tsx",
    "our_story_junoon_pakistani_gastronomy": "our-story/page.tsx",
    "private_dining_events_junoon_pakistani_gastronomy": "private-dining/page.tsx",
    "reservations_junoon_pakistani_gastronomy": "reservations/page.tsx",
    "the_experience_junoon_pakistani_gastronomy": "experience/page.tsx",
    "the_menu_junoon_pakistani_gastronomy_1": "menu/page.tsx",
}

for folder, out_file in mappings.items():
    code_path = os.path.join(input_dir, folder, "code.html")
    if os.path.exists(code_path):
        with open(code_path, "r", encoding="utf-8") as f:
            html = f.read()
        
        comp_name = "".join(x.capitalize() for x in out_file.split('/')[0].split('.')[0].split('-'))
        if comp_name == "Page": comp_name = "HomePage"
        else: comp_name = comp_name + "Page"
        
        jsx = process_html_to_jsx(html, comp_name)
        
        out_path = os.path.join(output_dir, out_file)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(jsx)
        print(f"Generated {out_path}")
