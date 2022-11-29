from formatting import *
import os

def test_get_commit_info():
    get_commit_info("backend/tests/test_commits.json", "backend/tests/test.json")
    with open("backend/tests/test.json",'r') as result:
        data = json.load(result)
    with open("backend/tests/formatted_commits.json",'r') as control:
        control_data = json.load(control)
    assert data == control_data
    os.remove("backend/tests/test.json")

def test_get_language_info():
    get_language_info("backend/tests/test_languages.json", "backend/tests/test2.json")
    with open("backend/tests/test2.json",'r') as result:
        data = json.load(result)
    with open("backend/tests/formatted_languages.json",'r') as control:
        control_data = json.load(control)
    assert data == control_data
    os.remove("backend/tests/test2.json")

def test_get_code_frequency_info():
    get_code_frequency_info("backend/tests/test_code_frequency.json", "backend/tests/test3.json")
    with open("backend/tests/test3.json",'r') as result:
        data = json.load(result)
    with open("backend/tests/formatted_code_frequency.json",'r') as control:
        control_data = json.load(control)
    assert data == control_data
    os.remove("backend/tests/test3.json")
