module default {
  type Todo {
    required property title -> str;
    required property completed -> bool {
      default := false;
    }
  }
}
