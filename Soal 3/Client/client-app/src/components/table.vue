<script>
export default {
  props: ['data'],
  methods : {
    findUserToEdit(userId){
      const userToEdit = this.data
        .slice()
        .sort((a, b) => a.id - b.id) 
        .find(user => user.id === userId);
      this.$emit('editUserData' ,userToEdit )
    },
    handleDeleteUser(userId) {
    this.$emit('deleteUserData', userId);
  }
  }
}
</script>

<template>
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">FullName</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Address</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="(user, index) in data" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.fullName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phoneNumber }}</td>
        <td>{{ user.address }}</td>
        <td>
          <div class="">
            <button type="button" @click="findUserToEdit(user.id)" class="btn btn-warning mx-2">Edit</button>
            <button type="button"  @click="handleDeleteUser(user.id)" class="btn btn-danger">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
