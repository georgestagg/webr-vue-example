<script setup lang="ts">
</script>

<template>
  <template v-if="loading">
    <p>WebR is loading...</p>
  </template>
  <template v-else>
    <p>WebR has loaded! Here is a table showing the <code>mtcars</code> dataset,</p>
    <table>
      <thead>
        <tr>
          <th v-for="name in Object.keys(mtcars)" :key="name">
            {{ name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="_, nIndex in mtcars[Object.keys(mtcars)[0]].values" :key="nIndex">
          <td v-for="name in Object.keys(mtcars)" :key="name">
            {{ mtcars[name].values[nIndex] }}
          </td>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<style>
table {
  color: #333;
  background: white;
  border: 1px solid grey;
  font-size: 8pt;
  border-collapse: collapse;
  margin: 1em auto 0 auto;
}
table thead th,
table tfoot th {
  background: #EEE;
}
table th, table td {
  padding: 0 .5em 0 .5em;
  border: 1px solid lightgrey;
}
</style>

<script lang="ts">
import type { WebR } from '@r-wasm/webr';
import type { RList } from '@r-wasm/webr/robj-main';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    webR: WebR;
  }
}

export default {
  mounted: async function () {
      await this.webR.init();
      const result = await this.webR.evalR('mtcars') as RList;
      try {
        this.mtcars = await result.toObject({ depth: 0 });
        this.loading = false;
      } finally {
        this.webR.destroy(result);
      }
  },
  data() {
    return {
      loading: true,
      mtcars: {} as { [key:string]: any },
    }
  },
};
</script>
