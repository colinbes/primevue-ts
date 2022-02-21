# Demo of PrimeVue broken Typescript.

An issue has been found when using primevue > 3.10.0 when using DataTables and filters - it's not to say that issues don't exist elsewhere, but just not for me.

I appears that there were pretty huge changes (and for the right reason) to many interfaces and types in order to make a more robust product.

Unfortunately it doesn't work, at least for me it does not work.

# Replicate issue.

You are already on your way.

- Clone this repo
- Change directory to cloned repo folder
  While node and npm versions don't seem to make a difference for this issue, to use same settings as I have then run `nvm use` in order to load npm version `8.1.2` and node version `v16.13.1`
- Install libraries `npm install`
- Edit `package.json` add `tsc` entry to scripts
    ```
    "scripts": {
      "dev": "vite",
      "tsc": "vue-tsc --noEmit",
      "build": "vue-tsc --noEmit && vite build",
      "preview": "vite preview"
    },
    ```
- Run TSC `npm run tsc`

  ```
  $> npm run tsc

  $> vite-pv@0.0.0 tsc
  $> vue-tsc --noEmit

  src/components/TestComponent.vue:47:56 - error TS2322: Type '{ deleted: { value: any; matchMode: DataTableFilterMatchModeType; }; name: { operator: string; constraints: { value: any; matchMode: DataTableFilterMatchModeType; }[]; }; program: { ...; }; }' is not assignable to type 'DataTableFilterMeta'.
  Property 'program' is incompatible with index signature.
    Type '{ operator: string; constraints: { value: null; matchMode: string; }[]; }' is not assignable to type 'DataTableFilterMetaData | DataTableOperatorFilterMetaData'.
      Type '{ operator: string; constraints: { value: null; matchMode: string; }[]; }' is not assignable to type 'DataTableOperatorFilterMetaData'.
        Types of property 'constraints' are incompatible.
          Type '{ value: null; matchMode: string; }[]' is not assignable to type 'DataTableFilterMetaData[]'.
            Type '{ value: null; matchMode: string; }' is not assignable to type 'DataTableFilterMetaData'.
              Types of property 'matchMode' are incompatible.
                Type 'string' is not assignable to type 'DataTableFilterMatchModeType'.

  47   <DataTable :value="actions" :rowHover="true" v-model:filters="filters"></DataTable>                
  ```
- Review `src/components/TestComponent.vue` and check highlighted type error on line 47 for v-model:filters
  ```
  <DataTable :value="actions" :rowHover="true" v-model:filters="filters"></DataTable>
  ```