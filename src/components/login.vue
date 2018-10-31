<template>
<v-container   text-xs-center>
   
    <v-layout   align-center justify-center row fill-height id="app">
        <v-flex  xs5>
  <v-app id="inspire">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Nombre"
        required
      ></v-text-field>
      <v-text-field
        v-model="date"
        label="Fecha de Nacimiento"
        required
      ></v-text-field>
      <v-text-field
        v-model="phone"
        label="Telefono"
        required
      ></v-text-field>
       <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Correo Electronico"
        required
      ></v-text-field>
      <v-select
        v-model="gender"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Genero"
        required
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
  
      <v-btn
        :disabled="!valid"
        @click="Registro"
      >
        Registrarse
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-app>
  </v-flex>
    </v-layout> 
</v-container>
    
    
</template>
<script>
import firebase from "firebase";

export default {
  name: "login",
  props: [],
  data() {
    return {
      valid: true,
      name: "",
      date: "",
      gender: "",
      phone: "",
      email: "",
      items: ["mujer", "varon"],
      checkbox: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ]
    };
  },
  mounted() {},
  created() {},
  watch: {},
  computed: {},
  methods: {
    Registro() {
      firebase
        .database()
        .ref("users/")
        .push({
          nombre: this.name,
          fecha: this.date,
          genero: this.gender,
          telefono: this.phone,
          email: this.email
        });
        this.mandril();
    },
    mandril(){
      
      console.log("hola mundo")
    },
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  },
  components: {}
}
</script>
