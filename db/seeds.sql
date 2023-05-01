use sidehustle_db;

insert into user (name,email,zipcode,date_created,password) 
values 
 ('Diana','datoro@gmail.com',12345,'2023-01-01','hola1234'),
 ('Benancio','batoro@gmail.com',12345,'2023-01-01','hola1234'),
 ('Alejo','atoro@gmail.com',12345,'2023-01-01','hola1234'),
 ('Pedro','patoro@gmail.com',12345,'2023-01-01','hola1234'),
 ('Mike','mitoro@gmail.com',12345,'2023-01-01','hola1234'),
 ('Mercedez','matoro@gmail.com',12345,'2023-01-01','hola1234'),
 ('Roberta','ratoro@gmail.com',12345,'2023-01-01','hola1234');


insert into gig(title,details,poster_id,winning_bid_id,post_date,target_available_date,accept_date,complete_date,rating)
values
('Paint my deck ', 'I am looking to modernize my deck with the most amazing color existing on earth',1,null,'2023-04-01','2023-04-05',null,null,null),
('Organize my room', 'I am looking for a change to my room. I need help to organize it.',1,null,'2023-04-01','2023-04-05',null,null,null),
('Feed my cats', 'I am leaving town for 2 days. I need help feeding my cats.',2,null,'2023-04-01','2023-04-05',null,null,null),
('Moving to Utah', 'I am looking for help to move to Utah',3,null,'2023-04-01','2023-04-05',null,null,null),
('Playing the piano', 'I am looking to learn how to play the piano',4,null,'2023-04-01','2023-04-05',null,null,null),
('I have a flat tire', 'I do not know how to change a tire. Please help for free.',5,null,'2023-04-01','2023-04-05',null,null,null),
('I need catering', 'I am looking to have a party. I need Catering.',6,null,'2023-04-01','2023-04-05',null,null,null),
('Walk my dogs', 'I am tiedup completing my BC Project2. I need help walking my dogs for 1 week.',7,null,'2023-04-01','2023-04-05',null,null,null);


insert into bid(gig_id,details,payment_method,charge,available_date,bidder_id,bid_date,rating)
values
(1,'yoyoyo', 'cash only', 200.17, '2023-4-11', 7, '2023-4-5',null),
(1,'yoyoyo', 'cash only', 200.17, '2023-4-11', 6, '2023-4-5',null),
(1,'yoyoyo', 'cash only', 200.17, '2023-4-11', 5, '2023-4-5',null),
(1,'yoyoyo', 'cash only', 200.17, '2023-4-11', 4, '2023-4-5',null),
(2,'yoyoyo', 'cash only', 200.17, '2023-4-11', 7, '2023-4-5',null),
(2,'yoyoyo', 'cash only', 200.17, '2023-4-11', 5, '2023-4-5',null),
(2,'yoyoyo', 'cash only', 200.17, '2023-4-11', 3, '2023-4-5',null),
(3,'yoyoyo', 'cash only', 200.17, '2023-4-11', 4, '2023-4-5',null),
(3,'yoyoyo', 'cash only', 200.17, '2023-4-11', 1, '2023-4-5',null);