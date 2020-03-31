<template>
  <v-data-table
    :headers="headers"
    :items="clients"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="lime darken-4">
        <v-toolbar-title>Абонементы</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn dark class="mb-2 brown darken-4" v-on="on">Новый абонемент</v-btn>
          </template>
          <v-card light>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.name" label="Фамилия, Имя"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.phone"
                                  prepend-inner-icon="mdi-phone"
                                  placeholder="12-345-67-89"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        v-model="editedItem.tickets"
                        label= "Тренировки"

                        type="number"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="true"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="editedItem.expired"
                            label="Дата окончания"
                            prepend-icon="mdi-event"
                            readonly
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker v-model="editedItem.expired" @input="menu2 = false" loacle="ru-ru" :first-day-of-week="1"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="12" md="4">
                    <v-text-field v-model="editedItem.status" label="Статус"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-textarea v-model="editedItem.other" auto-grow
         rows="1" label="Комментарий"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
              <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template class="grey lighten-1" v-slot:item.action="{ item }">
      <v-icon
        large
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-account-edit
      </v-icon>
      <v-icon
        large class = "red--text darken-2"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'ФИО',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        { text: 'Тренировки', value: 'tickets' },
        { text: 'Дата окончания', value: 'expired' },
        { text: 'Статус', value: 'status' },
        { text: 'Телефон', value: 'phone', sortable: false},
        { text: 'Комментарий', value: 'other' },
        { text: '', value: 'action', sortable: false },
      ],
      clients: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        tickets: 0,
        expired: new Date().toISOString().substr(0, 10),
        status: '',
        phone: '375',
        other: '',
      },
      defaultItem: {
        name: '',
        tickets: 4,
        expired: new Date().toISOString().substr(0, 10),
        status: 'активен',
        phone: '375',
        other: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Создать абонемент' : 'Редактировать'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.clients = [
          {
            name: 'Иван Иванов',
            tickets: 8,
            expired: '01-03-2020',
            status: 'активен',
            phone: '375297201122',
            other: '',
          },
          {
            name: 'Тетя Валя',
            tickets: 4,
            expired: '01-02-2020',
            status: 'активен',
            phone: '375297501122',
            other: '',
          },
          {
            name: 'Владимир П.',
            tickets: 8,
            expired: '01-03-2040',
            status: 'активен',
            phone: '375297601122',
            other: 'не платит',
          },
                    {
            name: 'Мария Марьянова',
            tickets: 10,
            expired: '16-02-2020',
            status: 'заморожен',
            phone: '375298101122',
            other: '',
          },
          {
            name: 'Ирина Петрова',
            tickets: 3,
            expired: '08-02-2020',
            status: 'активен',
            phone: '375297111122',
            other: 'должна 5 рублей',
          },
          {
            name: 'Валера',
            tickets: 0,
            expired: '11-01-2020',
            status: 'Истек',
            phone: '375333101122',
            other: 'Просил позвонить в мае',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.clients.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.clients.indexOf(item)
        confirm('Уверены, что хотите удалить абонемент?') && this.clients.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.clients[this.editedIndex], this.editedItem)
        } else {
          this.clients.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
