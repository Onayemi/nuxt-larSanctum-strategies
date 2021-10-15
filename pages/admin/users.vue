<template>
    <div>
        <h4>Manage {{ $nuxt.$route.path }}</h4>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <!-- <th scope="col">#</th> -->
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">date Created</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in results" :key="user.id">
                        <!-- <td>{{ user.id }}</td> -->
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>1</td>
                        <td>{{ user.created_at }}</td>
                        <!-- <td>{{ user.created_at | formatDate }}</td> -->
                        <td>
                            <button class="btn btn-secondary btn-sm text-white" data-bs-toggle="modal" data-bs-target="#usersModal" @click.prevent="openEditModal(user.id)">
                               Edit <i class="bi-pencil text-warning h6"></i>
                            </button>
                            <button class="tbn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#usersDeleteModal" @click.prevent="openDeleteModal(user.id)">
                                Delete <i class="bi-trash text-danger h6"></i>
                            </button>
                            <div class="btn btn-info btn-sm text-black" @click="test"> Confirm <i class="bi-clock text-primary h6"></i></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <button @click="toggle = !toggle" class="btn btn-success btn-sm mb-2">Click Here</button><br/>
        <i class="bi bi-house-fill text-dark h4 mx-2"></i><i class="bi bi-people-fill text-dark h4 mx-2"></i><i class="bi bi-facebook text-primary h4 mx-2"></i><i class="bi bi-whatsapp text-success h4 mx-2"></i><i class="bi bi-instagram text-danger h4 mx-2"></i><i class="bi bi-youtube text-danger h4 mx-2"></i> <br/>
        <input type="checkbox" id="vehicle" name="vehicle" class="my-3" value="Bike" @click="toggle = !toggle"> Choose Bike
        <div v-show="toggle">
                <div class="row mb-2">    
                    <div class="col-md-4 form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Your name">
                    </div>
                    <div class="col-md-4 form-group">
                        <label for="name">Email</label>
                        <input type="text" class="form-control form-control-sm" aria-label="small" placeholder="Your name">
                    </div>
                    <div class="col-md-4 form-group">
                        <label for="name">Email</label>
                        <input type="text" class="form-control form-control-sm" aria-label="small" placeholder="Your name">
                    </div>
                </div>
                <div class="row mb-2">    
                    <div class="col-md-6 form-group">
                        <label for="name">Phone</label>
                        <input type="text" class="form-control sm" placeholder="Your name">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="name">Code</label>
                        <input type="text" class="form-control sm" placeholder="Your name">
                    </div>
                </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="usersModal" tabindex="-1" aria-labelledby="usersModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="usersModalLabel">Update Users</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label for="name" class="form-label">Name</label>
                        <input type="hidden" class="form-control" v-model="form.id" readonly="true" id="id">
                        <input type="text" class="form-control" v-model="form.name" id="name" required>
                        <!-- <span class="error_valid" v-if="errors.name">{{ errors.name[0] }}</span> -->
                    </div>
                    <div class="col-md-12 mb-2">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" v-model="form.email" id="email" readonly="true" required>
                        <!-- <span class="error_valid" v-if="errors.email">{{ errors.email[0] }}</span> -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" @click.prevent="updateUser(results)">Save changes</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->
        <div class="modal fade" id="usersDeleteModal" tabindex="-1" aria-labelledby="usersDeleteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="usersDeleteModalLabel">Update Users</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Message for Deletion {{ resultId }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  layout: "newdashboard",
  middleware: "auth",

  data() {
      return {
        form: {
            id: '',
            name: '',
            email: '',
        },
        updateUserForm: '',
        results: [],
        resultId: '',
        errors: [],
        toggle: false
      }
  },

  filters: {
      formatDate(dateStr) {
          Intl.DateTimeFormat("us-EN").format(new Date(dateStr))
      } 
  },

  mounted() {
      this.getUsers()
  },

  created() {
      
  },

  methods: {
      async getUsers() {
          try {
            //   await this.$axios.$get('sanctum/csrf-cookie')  //1
                await this.$axios.$get('/users').then((response) => {
                    // console.log(response)
                    this.results = response.users
                })
          } catch (error) {}
      },

      async openEditModal(id){
          try {
            await this.$axios.$get('/user/'+ id).then((response) => {
                // console.log(response)
                // this.result = response.users
                this.form.id = response.user[0].id
                this.form.name = response.user[0].name
                this.form.email = response.user[0].email
            })
          } catch (e) {
            //   console.log(e)
            //     if(e.response.status == 422){
            //         this.errors = e.response.data.errors
            //     }
          }
      },

      async openDeleteModal(id){
          try {
            await this.$axios.$get('/user/'+ id).then((response) => {
                // console.log(response)
                this.resultId = response.user[0].id
                // this.form.id = response.user[0].id
            })
          } catch (e) {}
      },

      async updateUser(id){
          const uid = this.form.id
          try {
            await this.$axios.$post('/user/'+ uid, this.form).then((response) => {
                // this.$router.push('/admin/users')
                if(response){
                    alert('Message successfully')
                    location.reload();
                    $('#usersModal').modal('hide');
                    // document.location.reload();
                    this.getUsers()
                }
            })
          } catch (e) {}
      },

      deleteUser(id){
          alert('Delete Id' + id)
      },

      test(){
          alert('Testing')
      }
  }
};
</script>