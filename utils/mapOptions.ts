// maplibregl turf

import * as turf from '@turf/turf';
import { LayerType, addSourceType } from '@/types/mapTypes';

/**
 * 创建FeatureCollection
 * @param {Array} data 需要处理的数据
 * @return {Object} 打包后的FeatureCollection,用于渲染图层
 * */
export const createFeatureCollection = (data: Array<any>) => {
	return turf.featureCollection(
		data.map(item =>
			turf.polygon([item.gemo], {
				...item,
			})
		)
	);
};
/**
 * 地图飞向指定坐标
 * @param  map 地图实例
 * @param  center 地图中心点
 * @param  zoom 地图缩放级别
 * */
export const flyTo = (map: any, center: Array<number>, zoom: number) => {
	map.flyTo({
		center,
		zoom,
	});
};
/**创建地图上的图层
 * @param {string} map 地图实例
 * @param {string} layerId 图层id
 * @param {string} sourceId 数据源id
 * @param {string} type 图层类型
 * @param {string} paint 图层样式
 * @param {string} layout 图层布局
 * @see https://maplibre.org/maplibre-style-spec/layers/
 * */
export const createLayer = (map: any, layerId: string, sourceId: string, type: LayerType, paint: any, layout?: any) => {
	map.addLayer({
		id: layerId,
		source: sourceId,
		type,
		paint,
		layout,
	});
};
/**
 * 创建源
 * @param  map 地图实例
 * @param  {string} sourceId 数据源id
 * @param  {string} data  打包后的FeatureCollection
 * @param  {string} type 数据源类型
 * */
export const createSource = (map: any, sourceId: string, data: any, type: addSourceType) => {
	if (map.getSource(sourceId)) {
		map.value.getSource(sourceId).setData(data);
	} else {
		map.addSource(sourceId, {
			data,
			type,
		});
	}
};
/**
 * 删除地图上的图层
 * @param  map 地图实例
 * @param  {string} layerId 图层id
 * */
export const removeLayer = (map: any, layerId: string) => {
	map.removeLayer(layerId);
};

/**
 * 删除图层数据源
 * @param  map 地图实例
 * @param  {string} sourceId 图层id
 * */
export const removeSource = (map: any, sourceId: string) => {
	map.removeSource(sourceId);
};
