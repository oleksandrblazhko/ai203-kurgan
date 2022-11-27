// Створення об'єктного типу (клас) Category
class Category {
	constructor(name) {
		this.id = generate_next_id();
		this.name = name;
	}
}
category_array = []

// Створення об'єктного типу (клас) Topic
class Topic {
	constructor(name, author, category_id) {
		this.id = generate_next_id();
		this.name = name;
		this.author = author;
		this.category_id = category_id;
	}
}
topic_array = []

// Створення об'єктного типу (клас) Message
class Message {
	constructor(subject, sender, topic_id, text) {
		this.id = generate_next_id();
		this.subject = subject;
		this.sender = sender;
		this.topic_id = topic_id;
		this.text = text;
	}
}
messages_array = []

function generate_next_id() { // Останній id об'єкту певного класу +1 (Подібно sequence у sql)
	// ...
}