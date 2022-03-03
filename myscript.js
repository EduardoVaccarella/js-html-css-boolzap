const app = new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                name: 'Michele',
                avatar: 'https://picsum.photos/200',
                visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'https://picsum.photos/200',
                visible: true,
                    messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'https://picsum.photos/200',
                visible: true,
                    messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'https://picsum.photos/200',
                visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            ],
            
            contatto: "",
            messaggio: "",

            currentChat: 0,

            currentMessages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
            ],

            currentName: 'Michele'

        },
        methods: {
            displayMessages: function(index2) {

                this.currentChat = index2;

                this.currentName = this.contacts[index2].name;

                this.currentMessages = [];

                for(let i = 0; i < this.contacts[index2].messages.length; i++) {

                    this.currentMessages.push({
                        date: this.contacts[index2].messages[i].date,
                        text: this.contacts[index2].messages[i].text,
                        status: this.contacts[index2].messages[i].status
                    });
                }
                
            },

            sendMessage: function() {

                if(!this.messaggio == '') {
                    let today = new Date();
                    currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                    this.contacts[this.currentChat].messages.push(
                        {
                            date: currentTime,
                            text: this.messaggio,
                            status: 'sent'
                        }
                    );

                    this.currentMessages.push(
                        {
                            date: currentTime,
                            text: this.messaggio,
                            status: 'sent'
                        }
                    );

                    this.messaggio = '';

                    let currentTimeChat = this.currentChat;

                    setTimeout(() => {

                        let today = new Date();
                        currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                        this.contacts[currentTimeChat].messages.push(
                            {
                                date: currentTime,
                                text: 'Okay',
                                status: 'received'
                            }
                        );

                        if(currentTimeChat == this.currentChat) {
                            this.currentMessages.push(
                                {
                                    date: currentTime,
                                    text: 'Okay',
                                    status: 'received'
                                }
                            );
                        }
                        
                    } , 1000);
                }
            },

            cercaContatto: function() {
                if(!this.contatto == '') {



                    console.log(this.contatto);
                    this.contatto = '';
                }
            }
        }
    }
)



// con l'operatore terziario verifico se un messaggio é inviato o ricevuto e assegno la classe corrispondente al messaggio

// nei methods scriveró la funzione per ricercare i contatti che metterá in display: none; i contatti che non includono nel nome la parola ricercata