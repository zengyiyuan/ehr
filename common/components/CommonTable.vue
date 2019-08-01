<template>
    <el-table
        border
        ref="table"
        :fit="fit"
        :size="size"
        :data="data"
        :stripe="stripe"
        :highlight-current-row="highlightCurRow"
        :max-height="maxHeight"
        :style="{ maxWidth: maxWidth }"
        :span-method="spanMethod"
        @selection-change="hangleSelectionChange">
        <slot name="selection"></slot>
        <template slot="empty">
            暂无数据
        </template>
        <el-table-column
            v-for="(field, index) in fields"
            :key="index"
            :prop="field.prop"
            :label="field.label"
            :width="field.width || autoWidth(field.label)"
            :min-width="field.minWidth"
            :align="align"
            :fixed="field.fixed"
            :show-overflow-tooltip="showOverflowTooltip">
            <template slot-scope="scope">
                <slot
                    v-if="field.type === 'CUSTOM'"
                    :name="field.prop"
                    :scope="scope"></slot>
                <span v-else>
                    {{ getCellValue(scope.row, field.prop, field.formatter) }}
                </span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { get } from 'lodash'

export default {
    props: {
        data: {
            type: Array,
            default: [],
            required: true
        },
        fields: {
            type: Array,
            default: [],
            required: true
        },
        fit: {
            type: Boolean,
            default: true
        },
        size: {
            type: String
        },
        maxWidth: {
            type: String
        },
        stripe: {
            type: Boolean,
            default: false
        },
        highlightCurRow: {
            type: Boolean,
            default: false
        },
        maxHeight: {
            type: Number
        },
        align: {
            type: String,
            default: 'center'
        },
        showOverflowTooltip: {
            type: Boolean,
            default: true
        },
        spanMethod: {
            type: Function
        }
    },
    methods: {
        hangleSelectionChange(value) {
            this.$emit('select-change', value)
        },
        getCellValue(item, path, formatter) {
            const EMPTY_PLACEHOLDER = '--'
            let safeValue = get(item, path, EMPTY_PLACEHOLDER)
            return formatter ? (safeValue !== EMPTY_PLACEHOLDER ? formatter(safeValue) : safeValue ? safeValue : '--')
                : (safeValue !== '' && safeValue !== null) ? safeValue : '--'
        },
        autoWidth(label) {
            const LEFT_RIGHT_PADDING = 40
            const UNIT_CJK_CHAR_WIDTH = 15
            const UNIT_LATIN_CHAR_WIDTH = 8
            const NON_LATIN_CODEPIONT = /[^\u0000-\u00ff]/
            return label.split('').reduce((pre, cur) => {
                let w
                if (NON_LATIN_CODEPIONT.test(cur)) {
                    w = UNIT_CJK_CHAR_WIDTH
                } else {
                    w = UNIT_LATIN_CHAR_WIDTH
                }
                return pre + w
            }, LEFT_RIGHT_PADDING)
        }
    }
}
</script>
