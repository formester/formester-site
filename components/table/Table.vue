<template>
    <div class="container py-5">
        <div class="row justify-content-center align-items-center text-center ">
          <SectionTitle :heading="title" />
            <table class="tablestyle">
                <thead>
                    <TableRow :rowData="rows[0].rowData" :rowType="rows[0].rowType" />
                </thead>
                <tbody>
                    <TableRow
          v-for="(row, index) in rows.slice(1)"
          :key="index"
          :rowData="row.rowData"
          :rowType="row.rowType"
        />
      </tbody>
    </table>
        </div>
    </div>
  </template>
  
  <script>
  import TableRow from './TableRow.vue';
  
  export default {
    props: {
      title: {
        type: Array,
        required: true,
      },
      rows: Array,
    },
    components: {
      TableRow
    },
  };
  </script>
  
  <style scoped>

.tablestyle {
  margin-top: 32px;
}

 table {
  width: 100%;
  max-width: 980px;
  border-spacing: 0;
  margin: 16px 0;
  font-family: inherit;
  background: #fff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  table-layout: fixed;
  border-radius: 12px;
  overflow: hidden;
}
  
  th, td {
    padding: 12px 16px;
    text-align: left;
  }
  
  tbody tr {
    border-bottom: 1.5px solid #EAECF0;
  }
  tbody tr:nth-child(even) {
    background-color: #f9fafb;
  }
  tbody tr:last-child {
    border-bottom: none;
  }
  
  thead tr {
    background: #f3f4f6;
  }
  
  tbody td {
    color: #6b7280;
  }

  @media (max-width: 575px) {
    table {
      width: 95%;
    }
  }
  </style>
  