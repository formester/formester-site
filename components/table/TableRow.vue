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
      const isHead = this.rowType === 'head';
      const isFirstCol = index === 0;
      const style = {
        padding: '15px 20px',
        textAlign: 'left',
        wordWrap: 'break-word',
        whiteSpace: 'normal',
        verticalAlign: 'middle',
      };

      if (isHead) {
        // V2 header row: uppercase eyebrow-style labels.
        style.fontSize = '13px';
        style.fontWeight = '700';
        style.textTransform = 'uppercase';
        style.letterSpacing = '0.06em';
        style.color = '#475467'; // --fg-2
        style.backgroundColor = isHighlighted ? '#f7f3ff' : '#f9fafb'; // violet-25 : gray-50
        if (isHighlighted) {
          style.color = '#472594'; // --violet-600
          style.borderTop = '2px solid #6434d0'; // --violet-500 accent
        }
      } else {
        // V2 body row.
        style.fontSize = '14.5px';
        if (isFirstCol) {
          // Criteria column: stronger.
          style.color = '#101828'; // --fg-1
          style.fontWeight = '600';
        } else {
          style.color = '#475467'; // --fg-2
          style.fontWeight = 'normal';
        }
        if (isHighlighted) {
          // Subtle Formester-column tint.
          style.backgroundColor = '#f7f3ff'; // violet-25
          style.color = '#101828'; // --fg-1
          style.fontWeight = '600';
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

<style scoped>
/* Row separators on cells — reliable under border-collapse: separate.
   td carries this component's scope; the thead/tbody wrappers live in the
   parent (Table.vue) scope, so we style td directly and let the parent
   strip the final row's border. */
td {
  border-bottom: 1px solid var(--border-light);
}
</style>