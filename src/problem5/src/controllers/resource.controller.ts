import { Request, Response } from "express";
import ResourceService from "../services/resource.service";

export default class ResourceController {
    static async create(req: Request, res: Response) {
        try {
            const resource = await ResourceService.createResource(req.body);
            res.status(201).json(resource);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async getAll(req: Request, res: Response) {
        const { name, type } = req.query;
        const filters = { name: name as string, type: type as string };

        const resources = await ResourceService.getAllResources(filters);
        res.json(resources);
    }

    static async getOne(req: Request, res: Response) {
        const resource = await ResourceService.getResourceById(Number(req.params.id));
        resource ? res.json(resource) : res.status(404).json({ error: "Resource not found" });
    }

    static async update(req: Request, res: Response) {
        const resource = await ResourceService.updateResource(Number(req.params.id), req.body);
        resource ? res.json(resource) : res.status(404).json({ error: "Resource not found" });
    }

    static async delete(req: Request, res: Response) {
        const deleted = await ResourceService.deleteResource(Number(req.params.id));
        deleted ? res.json({ message: "Resource deleted" }) : res.status(404).json({ error: "Resource not found" });
    }
}
