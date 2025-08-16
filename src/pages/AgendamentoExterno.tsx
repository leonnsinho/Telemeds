import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  especialidade: string;
  dataPreferida: string;
  horarioPreferido: string;
  tipoConsulta: string;
  observacoes: string;
}

const AgendamentoExterno: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    especialidade: '',
    dataPreferida: '',
    horarioPreferido: '',
    tipoConsulta: 'online',
    observacoes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const especialidades = [
    'Psiquiatria',
    'Psicologia',
    'Endocrinologia',
    'Clínica Geral',
    'Medicina da Família',
    'Ginecologia'
  ];

  const horarios = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envio para API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aqui você integraria com sua API de agendamento
      console.log('Dados do agendamento:', formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          especialidade: '',
          dataPreferida: '',
          horarioPreferido: '',
          tipoConsulta: 'online',
          observacoes: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.nome && formData.email && formData.telefone && 
                     formData.especialidade && formData.dataPreferida && formData.horarioPreferido;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 sm:pt-24 lg:pt-28">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
            <Calendar className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Agendamento Online
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo para agendar sua consulta médica online de forma rápida e segura
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Formulário */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-600" />
                  Dados do Paciente
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Detalhes da Consulta
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="especialidade" className="block text-sm font-medium text-gray-700 mb-2">
                      Especialidade *
                    </label>
                    <select
                      id="especialidade"
                      name="especialidade"
                      value={formData.especialidade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecione uma especialidade</option>
                      {especialidades.map(esp => (
                        <option key={esp} value={esp}>{esp}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="tipoConsulta" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Consulta
                    </label>
                    <select
                      id="tipoConsulta"
                      name="tipoConsulta"
                      value={formData.tipoConsulta}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="online">Consulta Online</option>
                      <option value="presencial">Consulta Presencial</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="dataPreferida" className="block text-sm font-medium text-gray-700 mb-2">
                      Data Preferida *
                    </label>
                    <input
                      type="date"
                      id="dataPreferida"
                      name="dataPreferida"
                      value={formData.dataPreferida}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="horarioPreferido" className="block text-sm font-medium text-gray-700 mb-2">
                      Horário Preferido *
                    </label>
                    <select
                      id="horarioPreferido"
                      name="horarioPreferido"
                      value={formData.horarioPreferido}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecione um horário</option>
                      {horarios.map(horario => (
                        <option key={horario} value={horario}>{horario}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-2">
                    Observações Adicionais
                  </label>
                  <textarea
                    id="observacoes"
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Descreva seus sintomas ou informações importantes para a consulta..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Agendamento realizado com sucesso! Você receberá uma confirmação por email.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-800">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Erro ao processar agendamento. Tente novamente ou entre em contato conosco.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center ${
                    isFormValid && !isSubmitting
                      ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processando Agendamento...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Confirmar Agendamento
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar com informações */}
            <div className="space-y-6">
              
              {/* Card de Contato */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Telefone</p>
                      <p className="text-sm text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">contato@telemed.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Endereço</p>
                      <p className="text-sm text-gray-600">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card de Horários */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Horários de Atendimento
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Segunda a Sexta</span>
                    <span className="font-medium text-gray-900">8h às 18h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sábado</span>
                    <span className="font-medium text-gray-900">8h às 12h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Domingo</span>
                    <span className="font-medium text-red-600">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Card de Informações */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Importante
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Consultas online através de videoconferência</li>
                  <li>• Confirmação por email em até 2 horas</li>
                  <li>• Cancelamento com 24h de antecedência</li>
                  <li>• Prescrições digitais válidas em todo Brasil</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendamentoExterno;
