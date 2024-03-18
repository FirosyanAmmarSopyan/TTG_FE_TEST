<script>
import axios from 'axios';
import TableComponent from './components/table.vue';

export default {
  components: { TableComponent },
  data() {
    return {
      dataUser: [],
      searchData: '',
      showModalAdd: false,
      showModalEdit: false,
      user: {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      },
      formMode: 'Add',
      currentPage: 1,
      itemsPerPage: 5 // Jumlah item per halaman
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.dataUser.length / this.itemsPerPage);
    },
    paginatedDataUser() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.dataUser.slice(startIndex, endIndex);
    }
  },
  methods: {
    async fetchAllData() {
      try {
        const { data } = await axios.get('http://localhost:3000/GetAll');
        this.dataUser = data.map(user => ({
          ...user,
          fullName: `${user.firstName} ${user.lastName}`
        }));
      } catch (error) {
        console.log(error);
        this.$toast.error(error);
      }
    },

    async searchDataByID() {
      if (this.searchData) {
        try {
          const { data } = await axios.get(`http://localhost:3000/GetOne/${this.searchData}`);
          if (data) {
            this.dataUser = [{
              ...data,
              fullName: `${data.firstName} ${data.lastName}`
            }];
          } else {
            this.dataUser = [];
            this.$toast.error('Data Not Found');
          }
        } catch (error) {
          console.log(error);
          this.$toast.error(error);
        }
      } else {
        this.fetchAllData();
      }
    },
    showModal(mode) {
      this.formMode = mode === 'add' ? 'Add' : 'Edit';
      this.showModalAdd = mode === 'add';
      this.showModalEdit = mode === 'edit';
    },
    async showEditModal(user) {
      this.user = { ...user };
      this.showModal('edit');
    },
    async handleSubmit() {
      if (this.formMode === 'Add') {
        await this.handleAddUser();
      } else if (this.formMode === 'Edit') {
        await this.handleEditUser();
      }
    },
    async handleAddUser() {
      try {
        await axios.post('http://localhost:3000/Create', this.user);
        this.closeModal();
        this.$toast.success(`Success Add data`)
        this.fetchAllData();
      } catch (error) {
        console.log(error);
        this.$toast.error(error);
      }
    },
    async handleEditUser() {
      try {
        await axios.put(`http://localhost:3000/Update/${this.user.id}`, this.user);
        this.closeModal();
        this.fetchAllData();
      } catch (error) {
        console.log(error);
        this.$toast.error(error);
      }
    },
    closeModal() {
      this.showModalAdd = false;
      this.showModalEdit = false;
      this.user = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      };
    },
    async handleDeleteUser(userId) {
      try {
        await axios.delete(`http://localhost:3000/Delete/${userId}`)
        this.fetchAllData()
        this.$toast.success('User delete Successfully')
      } catch (error) {
        console.log(error);
        this.$toast.error(error);
      }
    },
  },
  created() {
    this.fetchAllData();
  }
};
</script>
<template>
  <div>
    <div class="text-center m-5">
      <h1>Table Data User</h1>
    </div>
    <!-- Modal -->
    <div class="container align-items-center" v-if="showModalAdd || showModalEdit">
      <div class="d-flex flex-row-reverse">
        <button @click="closeModal" class="Btn">
          <div style="color:white">X</div>
          <span class="tooltip">Close</span>
        </button>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="d-flex flex-column">
          <div class="my-2">
            <h5>First Name</h5>
            <input placeholder="Enter First Name" v-model="user.firstName" class="input" type="text">
          </div>
          <div class="my-2">
            <h5>Last Name</h5>
            <input placeholder="Enter Last Name" v-model="user.lastName" class="input" type="text">
          </div>
          <div class="my-2">
            <h5>Email</h5>
            <input placeholder="Enter Email" v-model="user.email" class="input" type="email">
          </div>
          <div class="my-2">
            <h5>Password</h5>
            <input placeholder="Enter Password" v-model="user.password" class="input" type="password">
          </div>
          <div class="my-2">
            <h5>Phone Number</h5>
            <input placeholder="Enter Phone Number" v-model="user.phoneNumber" class="input" type="number">
          </div>
          <div class="my-2">
            <h5>Address</h5>
            <input placeholder="Enter Address" v-model="user.address" class="input" type="text">
          </div>
        </div>
        <button class="btn btn-primary mb-3 w-100" type="submit">{{ formMode }}</button>
      </form>
    </div>
    <!-- End Modal -->
    <div v-else class="p-2">
      <div class="p-2 d-flex flex-row-reverse">
        <div class="InputContainer">
          <input placeholder="Search By Id"  v-model="searchData" @input="searchDataByID" id="input" class="input"
            type="number">
        </div>
        <div class="d-flex flex-col align-center">
          <button type="button" class="btn btn-primary mx-2" @click="showModal('add')">Add User</button>
        </div>
      </div>
      <TableComponent :data="dataUser" @deleteUserData="handleDeleteUser" @editUserData="showEditModal" />

    </div>
  </div>
</template>



<style>
.input::placeholder {
  color: #ffffff; /* Warna teks placeholder */
  opacity: 0.7; /* Opasitas teks placeholder */
}
h5{
  color: black;
}

.input {
  color: #ffffff;
  font-weight: 600;
  border: 2px solid #8707ff;
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  width: 100%;
}

.input:active {
  box-shadow: 2px 2px 15px #8707ff inset;
}

.Btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: rgb(27, 27, 27);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.11);
}

.svgIcon {
  fill: rgb(214, 178, 255);
}

.tooltip {
  position: absolute;
  right: -105px;
  opacity: 0;
  background-color: rgb(12, 12, 12);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: .2s;
  pointer-events: none;
  letter-spacing: 0.5px;
}

.tooltip::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background-color: rgb(12, 12, 12);
  background-size: 1000%;
  background-position: center;
  transform: rotate(45deg);
  left: -5%;
  transition-duration: .3s;
}

.Btn:hover .tooltip {
  opacity: 1;
  transition-duration: .3s;
}

.Btn:hover {
  background-color: rgb(150, 94, 255);
  transition-duration: .3s;
}

.Btn:hover .icon2 {
  border-bottom: 2px solid rgb(235, 235, 235);
  border-left: 2px solid rgb(235, 235, 235);
  border-right: 2px solid rgb(235, 235, 235);
}

.Btn:hover .svgIcon {
  fill: rgb(255, 255, 255);
  animation: slide-in-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
