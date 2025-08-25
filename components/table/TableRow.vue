<template>
  <tr>
    <td 
      v-for="cell in rowData" 
      :key="cell.id"
      :style="tdStyle"
    >
      <!-- If icon present, show icon; otherwise fallback to text -->
      <template v-if="getIconSrc(cell.cellIcon)">
        <img
          :src="getIconSrc(cell.cellIcon)"
          :alt="getIconAlt(cell)"
          style="max-width:24px; max-height:24px; object-fit:contain; display:block;"
        />
      </template>
      <template v-else>
        <div v-if="cell.cellData && cell.cellData.length === 1">
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
            :style="getTextStyle(data)"
          >
            {{ data.text }}
          </span>
        </div>
      </template>
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
  computed: {
    tdStyle() {
      return {
        fontWeight: this.rowType === 'head' ? '600' : 'normal',
        padding: '12px 16px',
        textAlign: 'left',
        wordWrap: 'break-word',
        whiteSpace: 'normal',
        verticalAlign: 'top',
      };
    },
  },
  methods: {
    // Return a valid icon URL from common Strapi shapes
    getIconSrc(icon) {
      if (!icon) return null;
      if (icon.image && icon.image.url) return icon.image.url;
      return null;
    },
    getIconAlt(cell) {
      const icon = cell && cell.cellIcon;
      if (icon && icon.imageAlt) return icon.imageAlt;
      if (cell && cell.cellData && cell.cellData[0] && cell.cellData[0].text) return cell.cellData[0].text;
      return 'icon';
    },
    getTextStyle(data) {
      return {
        color: data && data.highlight ? data.color : 'inherit',
        fontWeight: data && data.bold === true ? '500' : (data && data.bold === false ? 'normal' : '400'),
        verticalAlign: 'top',
      };
    },
  },
};
</script>