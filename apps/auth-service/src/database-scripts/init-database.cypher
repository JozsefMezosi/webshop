CREATE CONSTRAINT unique_user IF NOT EXISTS 
FOR (user:User) REQUIRE user.email IS UNIQUE;

CREATE CONSTRAINT user_email_string IF NOT EXISTS
FOR (user:User) REQUIRE user.email IS :: STRING;

CREATE CONSTRAINT user_password IF NOT EXISTS 
FOR (user:User) REQUIRE user.password IS NOT NULL;

CREATE CONSTRAINT user_password_string IF NOT EXISTS
FOR (user:User) REQUIRE user.password IS :: STRING;

CREATE CONSTRAINT user_firstName IF NOT EXISTS 
FOR (user:User) REQUIRE user.firstName IS NOT NULL;

CREATE CONSTRAINT user_firstName_string IF NOT EXISTS
FOR (user:User) REQUIRE user.firstName IS :: STRING;

CREATE CONSTRAINT user_lastName IF NOT EXISTS 
FOR (user:User) REQUIRE user.lastName IS NOT NULL;

CREATE CONSTRAINT user_lastName_string IF NOT EXISTS
FOR (user:User) REQUIRE user.lastName IS :: STRING;

CREATE CONSTRAINT user_roles IF NOT EXISTS 
FOR (user:User) REQUIRE user.roles IS NOT NULL;

CREATE CONSTRAINT user_roles_array IF NOT EXISTS
FOR (user:User) REQUIRE user.roles IS :: LIST<STRING NOT NULL>;
