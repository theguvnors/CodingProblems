namespace DeckOfCardQuestion {
    class Card {
        constructor(public cardType: CardType, public suitType: SuitType) {}
    }

    enum CardType {
        One,
        Two,
        Three,
        Four,
        Five,
        Six,
        Seven,
        Eigtht,
        Nine,
        Ten,
        Jack,
        Queen,
        King,
        Ace,
    }

    enum SuitType {
        Hearts,
        Diamonds,
        Spades,
        Clubs,
    }

    class Suit {
        public Cards: Card[] = [];

        constructor(public suitType: SuitType) {
            for (let i = 0; i < 14; i++) {
                this.Cards.push(new Card(i, suitType));
            }
        }
    }

    class CardDeck {
        public Hearts: Suit;
        public Diamonds: Suit;
        public Spades: Suit;
        public Clubs: Suit;

        constructor() {
            this.Hearts = new Suit(SuitType.Hearts);
            this.Diamonds = new Suit(SuitType.Diamonds);
            this.Spades = new Suit(SuitType.Spades);
            this.Clubs = new Suit(SuitType.Clubs);
        }

        get allCards(): Card[] {
            return [...this.Hearts.Cards, ...this.Diamonds.Cards, ...this.Spades.Cards, ...this.Clubs.Cards];
        }
    }

    class Dealer {
        private cardDeck: CardDeck = new CardDeck();

        startGame(numberOfPlayers: number) {
            let players = this.createPlayers(numberOfPlayers);
            const shuffledCards = this.shuffle(this.cardDeck.allCards);
        }

        private createPlayers(numberOfPlayers): Player[] {
            let players: Player[] = [];
            for (let i = 0; i < numberOfPlayers; i++) {
                players.push(new Player());
            }
            return players;
        }

        shuffle(cards: Card[]): Card[] {
            return cards;
        }
    }

    class Player {
        public Hand: Hand = new Hand();
    }

    class Hand {
        public cards: Card[] = [];
        get handValue(): number {
            return 0;
            r;
        }
    }

    class Game {}
}
