// fetch("/meals")
// .then(res => res.json())
// .then(console.log);

const meal = {
	"title": "Meal2",
	"description": "Test 2",
	"when_date": "2020-01-15",
	"price": 500.01,
	"max_guests": 10
};

fetch("/meals", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: JSON.stringify(meal)
})
.then(res => res.json())
.then(console.log);