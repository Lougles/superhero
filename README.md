# superhero
(GET) localhost:1234/hero -> all heroes with pagination 5 heroes per page. Only heroes nickname and picture.
(GET) localhost:1234/hero/ID -> one hero with all information about him.
(POST) localhost:1234/hero  ->  nickname field is required and unique (type string), real_name: field is required and unique (type string), Clarorigin_description: type string  superpowers: type string  catch_phrase: type string
(DELETE) localhost:1234/hero/ID. -> delete one hero with this id or show mistake if id not found.
(PATCH) localhost:1234/hero/ID -> update one hero with this id. You can update one two or all fields about hero.
(PATCH) localhost:1234/hero/img/ID.  -> upload hero avatar, any avatar change to 250x250 size and 60% quality. When you update avatar, an old avatar will be deleted. 
(DELETE) localhost:1234/hero/img/ID  -> delete hero avatar
