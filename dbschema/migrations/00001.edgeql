CREATE MIGRATION m1in4rvovszrvmfsjfs3kic4itokmthrt53ia2fpaqd77npdjt5xba
    ONTO initial
{
  CREATE TYPE default::Todo {
      CREATE REQUIRED PROPERTY completed -> std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
