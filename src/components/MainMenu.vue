<template>
   <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content @click = "$router.push({name:'home'})">
            <v-list-item-title>
              Главная
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
            <v-list-item-content @click = "$router.push({name:'about'})">
              <v-list-item-title>
                Клиенты
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
            {}
        ]

    })

}
</script>
