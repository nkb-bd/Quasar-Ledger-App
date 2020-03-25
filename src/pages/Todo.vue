<template>
  <q-page class="q-pa-lg  bg-grey-2 column">
    <div class="row q-pa-sm bg-primary">
      <q-input @keydown.enter="addTask" borderless  class="col bg-white q-pl-sm" v-model="newTask" placeholder="Add Task" dense >

        <template v-slot:append>
          <q-btn round dense flat icon="add"  @click="addTask"/>
        </template>
      </q-input>
    </div>
    <div>
      <div class="q-gutter-sm">

        <q-list class="bg-white"
        separator bordered
        >

          <q-item
            v-for="(task,index) in tasks"
            :key="task.title"
            :class="{'done bg-blue-1' : task.done  }"
            v-ripple
            @click="task.done= !task.done"
            clickable
          >
            <q-item-section avatar top>
              <q-checkbox v-model="task.done"  />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{task.title}}</q-item-label>
<!--              <q-item-label caption>-->
<!--                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod-->
<!--              </q-item-label>-->
            </q-item-section>
            <q-item-section
              side
              v-if="task.done"
            >
              <q-btn @click.stop="deleteTask(index)" dense outline round color="primary" icon="delete" />
            </q-item-section>
          </q-item>
        </q-list>

        <div v-if="!tasks.length" class="no-tasks absolute-center">
          <q-icon name="check" size="100px" color="primary text-center" />
            <div class="text-h5 text-primary text-center">
              No task
            </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>


export default {
  name: 'Todo',
  data(){
    return{
      newTask:'',
      tasks:[]
    }
  },
  methods:{
    deleteTask(index){
      this.$q.dialog({
        title: 'Delete',
        message: 'Confirm Delete?'
      }).onOk(() => {
        // console.log('OK')
        this.tasks.splice(index,1);

        // inside of a Vue component
        this.$q.notify.setDefaults({
          position: 'top-right',
          timeout: 2500,
          textColor: 'white',
          color:'primary',
          actions: [{ icon: 'close', color: 'white' }]
        })
        this.$q.notify('Task Deleted!')

      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    addTask(){

      if(this.newTask !=''){

        this.tasks.push({
          title:this.newTask,
          done: false
        })
        this.newTask=''

      }else{
        this.$q.notify('Can not add empty task!')

      }

    }

  }
}
</script>
<style lang="scss">
  .done{
    .q-item__label{
      text-decoration: line-through;
      color: #bbb;
    }


  }
  .q-field--standard .q-field__control:before {
    border-bottom: none;
  }
  .q-field--standard .q-field__control:hover:before {
    border-color: transparent;
  }
  .no-tasks{
    opacity: .5;
  }
</style>
