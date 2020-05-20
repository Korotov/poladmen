<template>
   <v-navigation-drawer
      app
      clipped
    >
      <v-list dense>

        <v-list-item link v-for="item in menuItems" :key="item.pathname">
          <v-list-item-action>
            <v-icon>mdi-{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content @click = "$router.push({name:item.pathname})">
            <v-list-item-title>
              {{item.name}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        menuItems: [
            {name: "Главная", icon: "home-account", pathname:"home"},
            {name: "Клиенты", icon: "account-multiple", pathname:"clients"},
            {name: "Абонементы", icon: "badge-account", pathname:"subscriptions"},
            {name: "Расписание", icon: "calendar-month", pathname:"schedule"},
            {name: "Тренеры", icon: "arm-flex", pathname:"trainers"},
            {name: "Журнал", icon: "history", pathname:"history"},

        ]

    })

}
</script>
