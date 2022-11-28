from backend.formatting import get_commit_info, get_language_info, get_code_frequency_info
import filecmp
import unittest

def test_get_commit_info():
    get_commit_info("test_commits.json", "result_formatted_commits.txt")
    result = (filecmp.cmp("result_formatted_commits.txt", "test_formatted_commits.txt"))
    assert result == True

#def test_get_language_info():

#def test_get_code_frequenc_info():
