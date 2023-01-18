import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import authAxios from 'src/modules/shared/axios/authAxios';

export default class DashboardService {
  static async ProjetStatus() {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/project/status`,
    );
    return response.data;
  }
  static async ProjetType() {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/project/type`,
    );
    return response.data;
  }

  static async ProjetCount() {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/project/count`,
    );
    return response.data;
  }

  static async objectifStatus() {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/objectifs`,
    );
    return response.data;
  }
  static async partnerCount() {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/partnerc`,
    );
    return response.data;
  }

  static async Newscount() {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/newsc`,
    );
    return response.data;
  }

  static async AdhrentCount() {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/userc`,
    );
    return response.data;
  }
}
