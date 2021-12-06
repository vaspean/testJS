class Api
{
	constructor() 
	{

	}
	get_api_path(object, template)
	{
        let re = template;
        for (let key of Object.keys(object)) {
            re = re.replace(`%${key}%`, object[key])
        }
		return re;
	}
}


let user =
{
	id		: 20,
	name	: 'John Dow',
	role	: 'QA',
	salary	: 100
};

let api_path_templates =
[
	"/api/items/%id%/%name%",
	"/api/items/%id%/%role%",
	"/api/items/%id%/%salary%"
];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) =>
{
	return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths));

// Ожидаемый результат
let expected_result = ["/api/items/20/John%20Dow","/api/items/20/QA","/api/items/20/100"];