-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: vulnapp
-- ------------------------------------------------------
-- Server version	8.4.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_Id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`comment_Id`),
  KEY `comments_posts_FK` (`post_id`),
  KEY `comments_users_FK` (`user_id`),
  CONSTRAINT `comments_posts_FK` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_Id`),
  CONSTRAINT `comments_users_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,1,'AI is definitely changing the game. Loved the part about Copilot!','2025-04-28 22:41:28'),(2,1,2,'It’s amazing how much time AI tools can save us now.','2025-04-28 22:41:52'),(3,2,1,'Good intro to security—very clear and easy to follow.','2025-04-28 22:41:59'),(4,2,3,'Thanks! This helped me understand XSS and CSRF much better.','2025-04-28 22:42:07'),(5,3,2,'React keeps evolving. I agree, still super relevant.','2025-04-28 22:42:28'),(6,4,1,'Nice one. The part about path traversal was eye-opening.','2025-04-28 22:42:40');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_Id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `author_Id` int NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`post_Id`),
  KEY `posts_users_FK` (`author_Id`),
  CONSTRAINT `posts_users_FK` FOREIGN KEY (`author_Id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'The Rise of AI in Web Development','Artificial Intelligence (AI) is rapidly transforming the landscape of web development. In the past, building websites and web applications required manual coding for every feature. Today, AI tools can assist developers by generating boilerplate code, suggesting functions, and even detecting bugs automatically. This doesn’t mean developers are being replaced—it means they’re being empowered. \r\n\r\nAI-powered code editors like GitHub Copilot use machine learning models trained on billions of lines of code to suggest real-time solutions. In addition, AI frameworks help identify performance issues, accessibility concerns, and user experience optimizations.\r\n\r\nAI also plays a critical role in personalization. Web apps are now able to adapt to users’ behavior, recommending content, adjusting layouts, and predicting what a user wants based on their history. Chatbots, powered by natural language processing, can provide customer support 24/7 and are a common feature on many modern websites.\r\n\r\nSecurity is another area where AI is becoming valuable. Machine learning can detect unusual patterns or behaviors in real-time, allowing sites to respond to potential threats instantly. As web technologies evolve, AI will continue to make development faster, smarter, and safer.\r\n\r\nHowever, with AI, developers must remain cautious. AI-generated code can sometimes introduce vulnerabilities or fail to follow best practices. That’s why understanding what the AI is doing, and reviewing all suggestions critically, is essential.\r\n\r\nIn summary, AI is not replacing developers—it’s changing how they work. By integrating smart tools into their workflow, developers can build more efficient, secure, and user-friendly applications. The future of web development isn’t just human—it’s human and AI working together.',1,'How AI is transforming the way we build modern web applications.'),(2,'Understanding Web Security Basics','Securing a web application is just as important as building its functionality. Many developers learn how to create features, but not how to protect them. That’s why understanding web security fundamentals is crucial. \r\n\r\nThe most common web vulnerabilities include SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF). SQL Injection allows attackers to manipulate database queries through input fields. XSS lets them run malicious scripts on a victim’s browser. CSRF tricks users into performing unwanted actions while logged in. Each of these can be devastating if left unaddressed.\r\n\r\nTo protect against SQL Injection, always use prepared statements and avoid directly embedding user input in SQL queries. For XSS, escape user-generated content before rendering it on the page. Modern frameworks like React escape text by default, but mistakes can still occur. For CSRF, using secure tokens and verifying user intent are essential.\r\n\r\nPassword security is another key topic. Never store plain text passwords. Instead, use hashing algorithms like bcrypt with a unique salt per user. This way, even if your database is compromised, passwords remain protected.\r\n\r\nIt’s also important to use HTTPS, limit user permissions, and validate both client-side and server-side inputs. Security should be a layered defense, not a single measure.\r\n\r\nWeb security isn’t something you implement once—it’s an ongoing process. Regularly test your applications, stay updated on vulnerabilities, and adopt a security-first mindset.\r\n\r\nUltimately, secure applications protect your users, your data, and your reputation. Whether you’re a beginner or an experienced developer, investing time in learning and applying web security practices will pay off in the long run.',2,'A beginner-friendly explanation of common web vulnerabilities and how to prevent them.'),(3,'Why React is Still Worth Learning in 2025','React has been one of the most popular JavaScript libraries for building user interfaces since its release. As of 2025, it’s still going strong. What makes React so appealing? For one, it uses a component-based architecture that allows developers to build modular, reusable code.\r\n\r\nEach component in React encapsulates its logic, structure, and styling, making large-scale application development easier to manage. React’s virtual DOM improves performance by only updating what’s necessary. This results in faster and smoother interfaces, even with dynamic content.\r\n\r\nReact also offers strong community support, a mature ecosystem, and continuous updates. Tools like React Router, Redux, and Next.js extend its capabilities for routing, state management, and server-side rendering. This means you can use React not just for websites, but for complex web applications.\r\n\r\nWith the introduction of features like React Server Components and Suspense, performance and code-splitting have been improved even further. These features allow for more efficient data fetching and rendering, giving users a faster experience while making the developer’s job easier.\r\n\r\nLearning React also opens up career opportunities. Many companies are building products with React or seeking developers with React experience. Whether you’re freelancing, joining a startup, or working at a large company, React is a valuable skill to have.\r\n\r\nSome may argue that newer frameworks are replacing React, but in practice, React remains dominant and highly relevant. New frameworks often take inspiration from React, and many of its concepts are transferable.\r\n\r\nIn conclusion, React’s flexibility, performance, and popularity make it a powerful tool in 2025 and beyond. Whether you’re just starting or looking to improve your frontend skills, React is a great choice.',2,'An up-to-date look at why React is still a top frontend library in 2025.'),(4,'Exploring Backend Vulnerabilities in Web Apps','While frontends get all the visual attention, the backend of a web application is where much of the sensitive logic and data reside—and where serious vulnerabilities can lurk. Common backend issues include SQL Injection, broken authentication, improper access control, and insecure APIs.\r\n\r\nA frequent mistake is trusting user input. If an API directly uses query parameters in SQL statements, it’s vulnerable to SQL Injection. This can allow attackers to extract, modify, or even delete database records. Always use parameterized queries.\r\n\r\nAuthentication and session management flaws are another issue. Weak password hashing, session IDs exposed in URLs, and poor token validation can all be exploited. Use strong hashing algorithms like bcrypt, implement session expiration, and always store tokens securely.\r\n\r\nAccess control flaws occur when APIs allow users to access or modify data they shouldn’t. For example, if a user can change the `user_id` in a request and view someone else’s account details, that’s a broken access control issue. Always validate the user’s identity server-side, never rely solely on frontend logic.\r\n\r\nLogging and error messages also matter. Detailed errors exposed to users can give attackers clues. It’s better to log detailed errors internally and show generic messages on the frontend.\r\n\r\nSecurity headers like `Content-Security-Policy` and `X-Content-Type-Options` can help reduce attack surfaces. Also, using rate limiting and CAPTCHA can deter brute-force attempts.\r\n\r\nA secure backend requires careful design, proper input validation, and regular testing. Tools like OWASP ZAP and Burp Suite are useful for scanning vulnerabilities and simulating attacks.\r\n\r\nIn summary, never assume your backend is safe just because it’s not visible. It’s the backbone of your application—and one mistake could cost you everything.',2,'A deep dive into common backend vulnerabilities and how to defend against them.');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` enum('user','admin') NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','admin@email.com','admin'),(2,'test','test','test@email.com','user'),(3,'alice','password123','alice@example.com','user'),(4,'bob','password123','bob@example.com','user'),(5,'charlie','password123','charlie@example.com','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'vulnapp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-28 17:45:53
