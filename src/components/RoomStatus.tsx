import React from "react";
import { Users, LogOut, RefreshCw } from "lucide-react";
import { Person } from "../types";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";

interface RoomStatusProps {
  people: Person[];
  loading: boolean;
  error: string | null;
  onLogout: () => void;

  onRefresh: () => void;
}

export const RoomStatus: React.FC<RoomStatusProps> = ({
  people,
  loading,
  error,
  onLogout,
  onRefresh,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">
              入室管理システム
            </h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={onRefresh}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              更新
            </button>
            <button
              onClick={onLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              ログアウト
            </button>
          </div>
        </div>

        {error && <ErrorMessage message={error} />}

        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <ul className="divide-y divide-gray-200">
                {people.map((person) => (
                  <li key={person.id}>
                    <div className="px-6 py-4 flex items-center justify-between">
                      <div>
                        <p className="text-lg font-medium text-gray-900">
                          {person.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          入室時間: {person.enterTime}
                        </p>
                      </div>
                      <button
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          person.status === true
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {person.status === true ? "入室中" : "退室済み"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
