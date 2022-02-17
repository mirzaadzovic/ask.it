const UserDto = require("./UserDto");

class UserProfileDto extends UserDto {
  constructor(user) {
    super(user);
    this.email = user.email;
  }
}

module.exports = UserProfileDto;
