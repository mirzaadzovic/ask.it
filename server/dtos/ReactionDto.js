class ReactionDto {
  constructor(reactions) {
    if (reactions?.length > 0) {
      this.likedByUsers = reactions.map((r) => ({
        userId: r.userid,
        isLike: r.islike,
      }));
      this.likes = reactions.reduce((total, r) => {
        if (r.islike) return Number(total) + 1;
        else return Number(total);
      }, 0);
      this.dislikes = reactions.reduce((total, r) => {
        if (!r.islike) return Number(total) + 1;
        else return Number(total);
      }, 0);
    } else {
      (this.likedByUsers = []), (this.likes = 0);
      this.dislikes = 0;
    }
  }
}

module.exports = ReactionDto;
