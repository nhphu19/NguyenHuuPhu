import { Op } from "sequelize";
import Resource from "../models/resource.model";

export default class ResourceService {
    static async createResource(data: { name: string; type: string; size: number }) {
        return await Resource.create(data);
    }

    static async getAllResources(filters: { name?: string; type?: string; }) {
        const whereClause: any = {};

        if (filters.name) {
            whereClause.name = { [Op.like]: `%${filters.name}%` };
        }
        if (filters.type) {
            whereClause.type = { [Op.like]: `%${filters.type}%` };
        }

        return await Resource.findAll({ where: whereClause });
    }

    static async getResourceById(id: number) {
        return await Resource.findByPk(id);
    }

    static async updateResource(id: number, data: { name?: string; value?: string; size?: number }) {
        const resource = await Resource.findByPk(id);
        if (!resource) return null;

        return await resource.update(data);
    }

    static async deleteResource(id: number) {
        return await Resource.destroy({ where: { id } });
    }
}
