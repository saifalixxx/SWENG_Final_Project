
# To setup type into command line
# pip install requests

import requests
import base64
import json
from pprint import pprint
import os


# Get json file for commits
if (os.path.exists('commits.json')):
    os.remove('commits.json')
url = "https://api.github.com/repos/bitcoin/bitcoin/commits"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + str(response.status_code))

with open('commits.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)

# Get json file for issues
if (os.path.exists('issues.json')):
    os.remove('issues.json')
url = "https://api.github.com/repos/bitcoin/bitcoin/issues"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + str(response.status_code))

with open('issues.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)

# Get json file for code frequency(weekly)
if (os.path.exists('code_frequency.json')):
    os.remove('code_frequency.json')
url = "https://api.github.com/repos/bitcoin/bitcoin/stats/code_frequency"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + str(response.status_code))

with open('code_frequency.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)

# Get json file for commit activity (weekly)
if (os.path.exists('commit_activity.json')):
    os.remove('commit_activity.json')
url = "https://api.github.com/repos/bitcoin/bitcoin/stats/commit_activity"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + str(response.status_code))

with open('commit_activity.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)

# Get json file for info on all contributors
if (os.path.exists('contributors.json')):
    os.remove('contributors.json')
url = "https://api.github.com/repos/bitcoin/bitcoin/stats/contributors"
response = requests.get(url)
response_list = response.json()
print("commits status code: " + str(response.status_code))

with open('contributors.json', 'w', encoding='utf-8') as f:
    json.dump(response_list, f, ensure_ascii=False, indent=4)
    
