user1 = new User("fagadngk@gmail.com", "BB476nBDF,xa");
user2 = new Moderator("dfshvcvx@gmail.com", "dfVHaas;");
user3 = new Administrator("qqqqqwwz@gmail.com", "m3bsvtn234abjKEFWD");

category_array = [];
topic_array = [];
messages_array = [];

category_array.append(user3.create_category("Test Category 1"));
topic_array.append(user1.create_topic("Test Topic", 1));
messages_array.append(user1.send_message("Hello World!", 1, "Lorem ipsum dolor sit amet..."));