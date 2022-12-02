# To setup type into command line
# pip install requests

import requests
import base64
import json
from pprint import pprint
import os

def languages():
    # Get json file for languages (Language metric)
     if (os.path.exists('languages.json')):
      os.remove('languages.json')
     url = "https://api.github.com/repos/vircadia/vircadia/languages"
     response = requests.get(url)
     response_list = response.json()
     print("languages status code: " + str(response.status_code))
     with open('languages.json', 'w', encoding='utf-8') as f:
      json.dump(response_list, f, ensure_ascii=False, indent=4)
     return response.status_code

def code_frequency():
     # Get json file for code frequency (Work breakdown metric)
     if (os.path.exists('backend/code_frequency.json')):
       os.remove('backend/code_frequency.json')
     url = "https://api.github.com/repos/vircadia/vircadia/stats/code_frequency"
     response = requests.get(url)
     response_list = response.json()
     print("code frequency status code: " + str(response.status_code))
     with open('backend/code_frequency.json', 'w', encoding='utf-8') as f:
       json.dump(response_list, f, ensure_ascii=False, indent=4)
     return response.status_code

def commit_activity():
     # Get json file for commit activity (Throughput + Burnout metrics)
     if (os.path.exists('backend/commit_activity.json')):
       os.remove('backend/commit_activity.json')
     url = "https://api.github.com/repos/vircadia/vircadia/stats/commit_activity"
     response = requests.get(url)
     response_list = response.json()
     print("commit activity status code: " + str(response.status_code))
     with open('backend/commit_activity.json', 'w', encoding='utf-8') as f:
       json.dump(response_list, f, ensure_ascii=False, indent=4)
     return response.status_code

def commits():
     # Get json file for commits
     if (os.path.exists('backend/commits.json')):
      os.remove('backend/commits.json')
     url = "https://api.github.com/repos/vircadia/vircadia/commits"
     response = requests.get(url)
     response_list = response.json()
     print("commits status code: " + str(response.status_code))
     with open('backend/commits.json', 'w', encoding='utf-8') as f:
      json.dump(response_list, f, ensure_ascii=False, indent=4)
     return response.status_code

