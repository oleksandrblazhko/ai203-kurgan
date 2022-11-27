// Створення об'єктного типу (клас) User
class User {
	constructor(email, password) {
		this.id = generate_next_id();
		this.email = email;
		this.password = password; // У зашифрованому вигляді
	}
	
	send_message(subject, topic_id, text) {
		print(`${subject}, topic ${topic_id}: ${text}`);
		return new Message(subject, this.id, topic_id, text);
	}
	
	edit_message(messages_array, id, new_text) {
		messages_array[id].text = new_text;
	}
	
	create_topic(name, category_id) {
		return new Topic(name, this.id, category_id);
	}
	
}

// Створення об'єктного типу (клас) Moderator
class Moderator extends User {
	constructor(email, password) {
		super(email, password);
	}
	
	delete_message(messages_array, id) {
		messages_array[id] = null;
	}
	delete_topic(topic_array, id) {
		topic_array[id] = null;
	}
}

// Створення об'єктного типу (клас) Administrator
class Administrator extends Moderator {
	constructor(email, password) {
		super(email, password);
	}
	
	create_category(name) {
		return new Category(name);
	}
	
	edit_category(category_array, id, new_name) {
		category_array[id].name = new_name;
	}
	
	delete_category(category_array, id) {
		category_array[id] = null;
	}
}
