from datetime import datetime
import json
import os
from writer import XlsAnalyticPaymentWriter

def load_data(file_path):
    current_dir = os.path.dirname(__file__)
    full_path = os.path.join(
        current_dir,
        file_path
    )
    with open(full_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

if __name__ == '__main__':
    data_clients = load_data('clients.json')
    data_payments = load_data('payments.json')
    data = {'clients': data_clients['clients'], 'payments': data_payments['payments']}
    timestamp = datetime.now().strftime('%Y_%m_%d_%H_%M_%S')
    output_file = f'Task1{timestamp}.xlsx'
    xls_writer = XlsAnalyticPaymentWriter(data)
    xls_writer.write_excel_report(output_file)
    print(f"Данные сохранены в фийл: {output_file}")