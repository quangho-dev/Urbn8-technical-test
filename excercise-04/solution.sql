SELECT st.st_id, st.st_name, g.marks, sub.sub_name 
FROM urbn8_test.student st, urbn8_test.grade g, urbn8_test.subject sub 
WHERE st.st_id = g.st_id AND g.sub_code = sub.sub_code 
ORDER BY g.marks DESC LIMIT 10;