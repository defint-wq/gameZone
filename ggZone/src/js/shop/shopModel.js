export class Account {
  constructor({
    id,
    title,
    rank,
    heroes,
    skins,
    winRate,
    price,
    badge,
    badgeClass,
    region,
  }) {
    this.id = id;
    this.title = title;
    this.rank = rank;
    this.heroes = heroes;
    this.skins = skins;
    this.winRate = winRate;
    this.price = price;
    this.badge = badge;
    this.badgeClass = badgeClass;
    this.region = region;
  }
}
