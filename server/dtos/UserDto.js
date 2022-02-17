class UserDto {
  constructor(user) {
    this.userId = parseInt(user.userid);
    this.firstName = user.firstname;
    this.lastName = user.lastname;
    this.avatarUrl = user.avatarurl;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = UserDto;
