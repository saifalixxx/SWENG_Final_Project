import requests
import json
import os

pageno = 1
access_token = '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'
user_name = 'Rian873'
# Create lists to keep urls of individuals commits 
digisomni_list = []
namark_list = []
berinaniesh_list = []
tenallday_list = []

# Go through a no of pages for roughly the past year
while pageno < 17:
    # Get call for current page
    url = "https://api.github.com/repos/vircadia/vircadia/commits?page=" + str(pageno)
    response = requests.get(url,auth=(user_name,access_token))
    a = response.json()
    # Go through every commit in the page and add them to the correct users list
    count = 0
    while count < 30:
     if (a[count]['author'] != None):  
      if (a[count]['author']['login'] == 'digisomni'):
        commit_url = a[count]['url']
        digisomni_list.append(commit_url)
        print("digisomni: " + commit_url)
      elif (a[count]['author']['login'] == 'namark'):
        commit_url = a[count]['url']
        namark_list.append(commit_url)
        print("namark: " + commit_url)
      elif (a[count]['author']['login'] == 'berinaniesh'):
        commit_url = a[count]['url']
        berinaniesh_list.append(commit_url)
        print("berinaniesh: " + commit_url)
      elif (a[count]['author']['login'] == '10allday'):
        commit_url = a[count]['url']
        tenallday_list.append(commit_url)
        print("10allday: " + commit_url)
     count = count + 1
    pageno = pageno + 1
    print(pageno)

# Create json file of all of digisomni's commits
if (os.path.exists('digisomni.json')):
       os.remove('digisomni.json')
with open('digisomni.json', 'w', encoding='utf-8') as f:
   count = 0
   for x in digisomni_list:
      url = digisomni_list[count]
      print(url)
      response = requests.get(url,auth=(user_name,access_token))
      json.dump(response.json(), f, ensure_ascii=False, indent=4)
      f.write('\n')
      count = count + 1
f.close()

# Create json file of all of namark's commits
if (os.path.exists('namark.json')):
       os.remove('namark.json')
with open('namark.json', 'w', encoding='utf-8') as f:
   count = 0
   for x in namark_list:
    url = namark_list[count]
    print(url)
    response = requests.get(url,auth=(user_name,access_token))
    json.dump(response.json(), f, ensure_ascii=False, indent=4)
    f.write('\n')
    count = count + 1
f.close()

# Create json file of all of berinaniesh's commits
if (os.path.exists('berinaniesh.json')):
       os.remove('berinaniesh.json')
with open('berinaniesh.json', 'w', encoding='utf-8') as f:
   count = 0
   for x in berinaniesh_list:
    url = berinaniesh_list[count]
    print(url)
    response = requests.get(url,auth=(user_name,access_token))
    json.dump(response.json(), f, ensure_ascii=False, indent=4)
    f.write('\n')
    count = count + 1
f.close()

# Create json file of all of 10allday's commits
if (os.path.exists('10allday.json')):
       os.remove('10allday.json')
with open('10allday.json', 'w', encoding='utf-8') as f:
   count = 0
   for x in tenallday_list:
    url = tenallday_list[count]
    print(url)
    response = requests.get(url,auth=(user_name,access_token))
    json.dump(response.json(), f, ensure_ascii=False, indent=4)
    f.write('\n')
    count = count + 1
f.close()



