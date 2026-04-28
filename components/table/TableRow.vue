<template>
  <tr>
    <td 
      v-for="(cell, index) in rowData" 
      :key="cell.id"
      :style="getTdStyle(index)"
    >
      <!-- If icon present, show icon; otherwise fallback to text -->
      <template v-if="getIconSrc(cell.cellIcon)">
        <img
          :src="getIconSrc(cell.cellIcon)"
          :alt="getIconAlt(cell)"
          width="24"
          height="24"
          loading="lazy"
          style="max-width:24px; max-height:24px; object-fit:contain; display:block;"
        />
      </template>
      <template v-else>
        <div v-if="cell.cellData && cell.cellData.length === 1">
          <CellData
            :text="cell.cellData[0].text"
            :isHighlighted="cell.cellData[0].highlight"
            :textColor="cell.cellData[0].color"
            :bold="cell.cellData[0].bold || (highlightColumn && index + 1 === highlightColumn)"
          />
        </div>
        <div v-else>
          <span
            v-for="(data, dataIndex) in cell.cellData"
            :key="dataIndex"
            :style="getTextStyle(data, index)"
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
    highlightColumn: {
      type: Number,
      default: null,
    },
  },
  components: {
    CellData,
  },
  methods: {
    getTdStyle(index) {
      const isHighlighted = this.highlightColumn && index + 1 === this.highlightColumn;
      const style = {
        padding: '16px 20px',
        textAlign: 'left',
        wordWrap: 'break-word',
        whiteSpace: 'normal',
        verticalAlign: 'middle',
      };

      if (isHighlighted) {
        if (this.rowType === 'head') {
          // Dark Header Highlight
          style.backgroundColor = '#6366f1'; 
          style.color = '#ffffff';
          style.fontWeight = '700';
        } else {
          // Light Column Highlight
          style.backgroundColor = '#f5f3ff'; 
          style.color = '#111827';
          style.fontWeight = '600';
        }
      } else {
        // Normal Styling
        style.fontWeight = this.rowType === 'head' ? '600' : 'normal';
        style.color = this.rowType === 'head' ? '#374151' : '#6b7280';
        if (this.rowType === 'head') {
          style.backgroundColor = '#f9fafb';
        }
      }

      return style;
    },
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
    getTextStyle(data, colIndex) {
      const isColHighlighted = this.highlightColumn && colIndex + 1 === this.highlightColumn;
      return {
        color: data && data.highlight ? data.color : 'inherit',
        fontWeight: (data && data.bold === true) || isColHighlighted ? '700' : (data && data.bold === false ? 'normal' : '400'),
        verticalAlign: 'top',
      };
    },
  },
};
</script>