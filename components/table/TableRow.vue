<template>
    <tr>
      <td 
        v-for="cell in rowData" 
        :key="cell.id"
        :style="{
          fontWeight: rowType === 'head' ? '600' : 'normal',
          padding: '12px 16px',
          textAlign: 'left',
          wordWrap: 'break-word', /* Ensure word wrap works for long text */
          whiteSpace: 'normal',   /* Allows the text to wrap */
          verticalAlign: 'top',
        }"  
      >
        <div v-if="cell.cellData.length === 1">
          <CellData
            :text="cell.cellData[0].text"
            :isHighlighted="cell.cellData[0].highlight"
            :textColor="cell.cellData[0].color"
            :bold="cell.cellData[0].bold"
          />
        </div>
        <div v-else>
          <span
            v-for="(data, index) in cell.cellData"
            :key="index"
            :style="{
              color: data.highlight ? data.color : 'inherit',
              fontWeight: data.bold === true ? '500' : (data.bold === false ? 'normal' : '400'),
              verticalAlign: 'top', // Align text to top
            }"
          >
            {{ data.text }}
          </span>
        </div>
      </td>
    </tr>
  </template>
  
  <script>
  import CellData from './CellData.vue';
  
  export default {
    props: {
      rowData: Array,
      rowType: String, // For header row type handling
    },
    components: {
      CellData,
    },
  };
  </script>
  