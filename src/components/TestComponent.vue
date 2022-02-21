<script setup lang="ts">

import { ref } from 'vue'
import { FilterMatchMode, FilterOperator, FilterService } from 'primevue/api'
import { Action } from '../interfaces/actions'
// import { DataTableFilterMeta } from 'primevue/datatable'
import { DataTableFilterMetaData, DataTableOperatorFilterMetaData } from 'primevue/datatable'

const actions = ref<Action[]>();

if (FilterService.register) {
  FilterService.register("stagesGTE", (value: any, filter: any) => {
    if (filter == null) return true
    return value.length >= filter
  })
  FilterService.register("stageLT", (value: any, filter: any) => {
    if (filter == null) return true
    return value.length < filter
  })
}

const matchModeOptions = ref([
  {label: 'GTE', value: 'stagesGTE'},
  {label: 'LT', value: 'stageLT'}
])

const myFilters = ref({
  'action': { value: 'asd', matchMode: FilterMatchMode.EQUALS} as DataTableFilterMetaData  
})

const filters = ref({
  deleted: { value: null, matchMode: FilterMatchMode.EQUALS } as DataTableFilterMetaData,
  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
  } as DataTableOperatorFilterMetaData,
  program: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: "stagesGTE" }]
  }
})

</script>

<template>
  <DataTable :value="actions" :rowHover="true" v-model:filters="myFilters"></DataTable>
  <DataTable :value="actions" :rowHover="true" v-model:filters="filters"></DataTable>
</template>
