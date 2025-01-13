/**
 * 地图图层类型
 * - 'Background'：背景图层
 * - 'Fill'：填充图层（用于面状数据）
 * - 'Circle'：点状数据的圆形图层
 * - 'Heatmap'：热力图层
 * - 'Fill-extrusion'：三维挤压面图层
 * - 'Line'：线状数据图层
 * - 'Symbol'：符号图层（用于图标或文字标注）
 * - 'Raster'：栅格图层（影像或切片图层）
 * - 'Hillshade'：阴影坡度图层（用于地形表现）
 */
export type LayerType =
    | 'Background'
    | 'Fill'
    | 'Circle'
    | 'Heatmap'
    | 'Fill-extrusion'
    | 'Line'
    | 'Symbol'
    | 'Raster'
    | 'Hillshade';


export type addSourceType = 'geojson' | 'raster'
