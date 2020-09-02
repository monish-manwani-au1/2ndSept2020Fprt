# Core CSE FPRT 2/9/2020

Q1.What is Cryptography and what are the Encryption Methods?

Cryptography is a technique that makes use of codes (which maybe ciphers, special characters or symbols) on any form of information such that only the intended receiver of that information can receive that information. 

Cryptography consists of 2 main techniques: encryption and decryption.

In encryption the information is converted to codes from the senders end then sent to receivers end wherein then at receivers end the information is decoded as per requirement so that receiver can understand the information.

Encryption methods are a set of methods used to encrypt or convert data from its present form to a set of codes which is known only to sender and intended receivers.

Some common methods of encryption include AES, RSA, Twofish

Q2.On entering a URL in a browser, explain the detailed procedure in which the request is handled by the browser and the result is obtained for the given search query?

Before anything else takes place one has to ensure that a suitable network connection exists between the client (your computer/digital device) and outside world by way of internet etc. as all data to and from the client is sent across using network protocols and in case of internet it will be mainly by TCP /IP.

Generally exchange of data and other communication is done with a server.

Client end with suitable network connection in place:
You start by typing a web address into the URL and click or press enter.
The browser proceeds to the Domain Name server (analogous to a virtual address book), and finds the actual address of the computer or server where the website is hosted or stored (using TCP/IP as mentioned above).
This is then followed by an HTTP request message to the server, asking it to send a copy of the website to your computer or more specifically your computer or client. 
Once the server receives the client’s request it has two options:
(i)Approves the client's request, the server responds to the client with a "200 OK" message and then starts sending the website's files to the browser as a series of small chunks called data packets 
(ii)Alternatively due to any geographic restrictions an HTTP status code 403 is returned or else depending on situation HTTP status codes 404, 500 etc. If the server has approved the client request the browser assembles the small chunks into a complete webpage and displays it to you otherwise it displays an error message.

Q3.What is Multithreading? What is the difference between a thread and a process?

Difference between thread and process:

Thread- Is the smallest executable unit of a process using the memory of the process they belong to thereby all threads share same memory with other threads of the process they belong to. Threads are light weight operations.

Process: simply stated it’s a program in execution or executing instance of a program. Each process has their own memory space and Process does not share memory with other processes.
Processes are heavy operations. Each process can have multiple threads wherein there is always one main thread.
When executed a Program are basically an interplay of threads of a process. 

Multithreading: the practice of running multiple threads/tasks at the same time for example if MS word is considered as a program and displaying of typed text and autocorrect feature are considered as threads then we can state that MS word is a multithreaded application.

At any given time each individual core of the cpu can execute one thread but we have multicore CPU hence any programs written in such a manner wherein multiple threads are created for execution of independent subparts within a program such that at any given time interval you have multiple threads being executed by the respective cpu cores.

Q4.Difference between INNER and OUTER JOIN?

In SQL the purpose of join is to compare, combine and return specific rows of data from 2 or more tables stored in a particular database. 

The 2 major types of Joins in sql are inner and outer join

An inner join finds combines and returns all similar, matching or overlapping data across the tables based on the specified input query  

An outer join on the other hand along with returning similar data like inner join also return dissimilar or unique data existing only in 1 of tables based on specified input query.

Types of outer joins: left outer join, right outer join, full outer join


Q5.How will you analyze 'process out of memory exception' in your node js application?

Arrange for an  increase in the allocated memory limit to your node js application if possible or alternatively identify which part of application is exactly causing this issue and trying to figure an alternative workaround.

Q6.If RAM size is 4GB, if 4 processes of size 2GB are launched! What happens? 

Process is killed

Non attempted questions :

How will you create persistent connections between the server and the client?

Explain Indexing in DBMS.

What are normalization and denormalization and why do we need it?

What is Cache? Where does cache lie in an Operating System? Difference between Cache and HashMap. 





