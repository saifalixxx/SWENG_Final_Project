
# To setup type into command line
# pip install requests

import requests
import base64
import json
from pprint import pprint

# Get json file for commits
url = "https://api.github.com/repos/bitcoin/bitcoin/commits"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + response.status_code)

with open('commits.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)

# Get json file for issues
url = "https://api.github.com/repos/bitcoin/bitcoin/issues"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + response.status_code)

with open('issues.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)

# Get json file for code frequency(weekly)
url = "https://api.github.com/repos/bitcoin/bitcoin/stats/code_frequency"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + response.status_code)

with open('code_frequency.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)

# Get json file for commit activity (weekly)
url = "https://api.github.com/repos/bitcoin/bitcoin/stats/commit_activity"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + response.status_code)

with open('commit_activity.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)

# Get json file for info on all contributors
url = "https://api.github.com/repos/bitcoin/bitcoin/stats/contributers"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + response.status_code)

with open('code_frequency.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)
    
