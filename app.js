class Message {
    constructor(personName, messageText) {
        this.personName = personName;
        this.time = new Date();
        this.messageText = messageText;
    }

    toString() {
        let hourStr = this.time.getHours() > 9 ? this.time.getHours() : `0${this.time.getHours()}`;
        let minuteStr = this.time.getMinutes() > 9 ? this.time.getMinutes() : `0${this.time.getMinutes()}`;

        return `${hourStr}:${minuteStr} ${this.personName} : ${this.messageText}`;
    }
}

class Messenger {
    constructor() {
        this._messages = [];
    }

    show_history() {
        for (let i in this._messages) {
            console.log(this._messages[i].toString());
        }
    }

    send(person, text) {
        this._messages.push(new Message(person, text))

    }
}

let messenger = new Messenger()
messenger.send('Resul', 'ilk mesaj')
messenger.send('Orxan', 'İkinci mesaj')
messenger.show_history()