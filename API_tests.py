from API_testing import *

# test the languages call
def test_languages():
    res = languages()
    assert res == 200, 'Error, languages not pulled'

# test the code frequency call
def test_code_frequency():
    res = code_frequency()
    assert res == 200, 'Error, code frequency not pulled'

# test commit activity call
def test_commit_activity():
    res = commit_activity()
    assert res == 200, 'Error, commit activity not pulled'

# test commitscall
def test_commits():
    res = commits()
    assert res == 200, 'Error, commits not pulled'